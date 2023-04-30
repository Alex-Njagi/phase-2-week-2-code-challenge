import { Heading, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BotCollection } from "../data/RobotsList";
import { MyRobots, YourBotArmy } from "./MyRobots";

function App() {
  const [robots, setRobots] = useState([])
  const [collection, setCollection] = useState([])

    useEffect(()=>{
      fetch (`http://localhost:3002/bots`)
      .then ((res)=>res.json())
      .then ((robots)=>setRobots(robots))
    },[])


    

    /*const handleAddRobot = (newCollection) => {
      setCollection([
        ...collection, {
        id: collection.length +1,
        ...newCollection}])
  }*/

    return (
      <VStack backgroundColor={'gold'}>
        <Heading padding={'10'}>
          Welcome To Bot Battlr!
        </Heading>
        
        <Wrap spacingX={'96'}>
          <WrapItem>
            <YourBotArmy />
          </WrapItem>

          <WrapItem>
            <BotCollection robots={robots}/>
          </WrapItem>

        </Wrap>
      </VStack>
    )
}

export default App;
