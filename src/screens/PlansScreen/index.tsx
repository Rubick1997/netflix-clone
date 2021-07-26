import React, { useEffect, useState } from "react";
import db from "../../firebase";
import styles from "./index.module.scss";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";
import { useAppDispatch } from "../../app/hooks";
import { updateRole } from "../../features/roleSlice";

type Subscription = {
  role: string;
  current_period_end: number;
  current_period_start: number;
};

type Products = {
  [id: string]: {
    description?: string;
    name?: string;
    prices?: {
      priceId?: string;
      priceData?: firebase.firestore.DocumentData;
    };
  };
};

const PlansScreen = () => {
  const [products, setProducts] = useState<Products>();
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState<Subscription>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (item) => {
          setSubscription({
            role: item.data().role,
            current_period_end: item.data().current_period_end.seconds,
            current_period_start: item.data().current_period_start,
          });
        });
      });
  }, [user.uid]);

  useEffect(() => {
    if (subscription?.role !== null || undefined) {
      dispatch(updateRole(subscription?.role));
      console.log(subscription?.role)
    }
  }, [subscription,dispatch]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products: Products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  const loadCheckout = async (priceId?: string) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } =
        snap.data() as unknown as firebase.firestore.DocumentData;
      if (error) {
        alert(`An error occured: ${error.message}`);
      }
      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51JGYkBBdqz1k3MmdtzuAkA3N5Ia17MKrzG3klu4iAOiZJGbtex8ItVGHJD7G35mDWk4cADOVAgfndXkFj86ZezX700TaQHtz0n"
        );
        stripe?.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className={styles.plans}>
      {subscription && (
        <p>
          Renewal date:{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {products &&
        Object.entries(products).map(([priceId, priceData]) => {
          if (subscription) {
            const isCurrPackage = priceData.name
              ?.toLowerCase()
              .includes(subscription?.role);
            return (
              <div
                key={priceId}
                className={`${isCurrPackage && styles.planDisabled} ${
                  styles.plan
                }`}
              >
                <div className={styles.info}>
                  <h5> {priceData.name}</h5>
                  <h6>{priceData.description}</h6>
                </div>
                <button
                  onClick={() => {
                    loadCheckout(priceData.prices?.priceId);
                  }}
                >
                  {isCurrPackage ? "Current Package" : "Subscribe"}
                </button>
              </div>
            );
          }
        })}
    </div>
  );
};

export default PlansScreen;
