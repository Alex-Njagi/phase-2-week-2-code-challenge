import { Card, CardBody, Container, HStack, Wrap, WrapItem } from "@chakra-ui/react";
import { Robots } from "../components/Robots";

export function RobotsList ({robots}) {
    return (
            <Container width={'50'} alignSelf={'flex-start'}>
                {robots.map((robot) => (
                <Robots
                    key={robot.id}
                    robot={robot}
                />
                ))}
            </Container>
        
    )
}