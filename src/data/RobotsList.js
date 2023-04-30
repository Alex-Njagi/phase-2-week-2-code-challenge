import { Container } from "@chakra-ui/react";
import { Robots } from "../components/Robots";

export function BotCollection ({robots}) {
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