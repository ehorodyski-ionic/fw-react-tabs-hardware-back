import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { triangle, ellipse, square } from "ionicons/icons";
import React, { useEffect } from "react";
import { Route, Redirect, useRouteMatch } from "react-router";
import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";
import Tab3 from "./tabs/Tab3";

const TabsOutlet: React.FC = () => {
  const match = useRouteMatch();


  useEffect(() => {
    console.log(match);
  }, [match]);

  return (
    <IonTabs>
        <IonRouterOutlet>
          <Route path="/tabs/tab1" component={Tab1} exact={true} />
          <Route path="/tabs/tab2" component={Tab2} exact={true} />
          <Route path="/tabs/tab3" component={Tab3} exact={true} />
          <Route path="/tabs" render={() => <Redirect to="/tabs/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tabs/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tabs/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tabs/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
  );
};
export default TabsOutlet;