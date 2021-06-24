import React from 'react'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import styled from 'styled-components'
import PU from './pu'
import Bcom from './b_com'
import Mcom from './m_com'

export default function Index() {
    return (
        <div>   
            <Tabs
        defaultTab="one"
        onChange={(tabId) => { console.log(tabId) }}
      >
        <TabList>
          <Tab tabFor="one">PRE-UNIVERSITY </Tab>
          <Tab tabFor="two">Degree UG</Tab>
          <Tab tabFor="three">M.Com.</Tab>
        </TabList>

        <TabPanel tabId="one">
                <PU/>
        </TabPanel>
        <TabPanel tabId="two">
                <Bcom/>
        </TabPanel>
        <TabPanel tabId="three">
                 <Mcom/>
        </TabPanel>
      </Tabs>

        </div>
    )
}

