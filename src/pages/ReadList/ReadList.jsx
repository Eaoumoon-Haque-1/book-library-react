import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";

const ReadList = () => {
//   const data = useLoaderData();
//   useEffect(()=>{
//          const storedBookData = getStoredBook();
         
//   })
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>My Read Books</Tab>
          <Tab>My Wishlist</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
