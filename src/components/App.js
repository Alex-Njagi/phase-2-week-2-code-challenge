import { Heading, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RobotsList } from "../data/RobotsList";

function App() {
const [robots, setRobots] = useState([])

  useEffect(()=>{
    fetch (`http://localhost:3002/bots`)
    .then ((res)=>res.json())
    .then ((robots)=>setRobots(robots))
  },[])

  return (
    <VStack backgroundColor={'gold'}>
      <Heading padding={'10'}>
        Welcome To Bot Battlr!
      </Heading>

      <RobotsList robots={robots}/>

    </VStack>
  )
}

export default App;
