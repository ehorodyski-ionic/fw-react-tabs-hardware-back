import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import React from 'react';
import { Redirect } from 'react-router';

const HomePage: React.FC = () => {
  return (
    <Redirect to="/tabs" />
  );
};
export default HomePage;