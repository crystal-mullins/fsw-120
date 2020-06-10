import React from "react";

import Card from "./Card"

function App() {
  return (
    <div class="container">     
            <Card 
              cardColor="red"
              title="love"
              subtitle="hate"
              description="what is real"
            />
          
            <Card 
              cardColor="green"
              title="why"
              subtitle="because"
              description="nothing is real"
            />

            <Card 
              cardColor="red"
              title="fun"
              subtitle="party"
              description="Bars that never close"
            />

            <Card 
              cardColor="blue"
              title="change"
              subtitle="better"
              description="changing the world for the better"
            />

            <Card 
              cardColor="pink"
              title="Peace"
              subtitle="justice"
              description="when we have justice there will be peace" 
            />

            <Card 
              cardColor="red"
              title="justice must prevail"
              subtitle="liberity for all"
              description="working everyday for change"
            />
        
            <Card 
              cardColor="green"
              title="Required"
              subtitle="i dont like what i see"
              description="if i dont do it someone evil will"
            />

            <Card 
              cardColor="red"
              title="You decide"
              subtitle="celebrate"
              description="freedom to choose"
          />

          <Card 
              cardColor="blue"
              title="prosperity"
              subtitle="for everyone"
              description="there is abundance"
            />

            <Card 
              cardColor="pink"
              title="Time"
              subtitle="lets do it together"
              description="its my turn to rule the world"
            />
    </div>
  );
}

export default App;
