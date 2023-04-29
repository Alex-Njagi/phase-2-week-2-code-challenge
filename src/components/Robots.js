//import { CardBody, Text, Image, Stack, Heading, VStack, HStack } from "@chakra-ui/react";
import { Heading, Text, VStack, HStack, Stack, Image } from "@chakra-ui/react"

export function Robots ({robot: {id, name, health, damage, armor, bot_class, catchphrase,
                            avatar_url, created_at, updated_at}}) {
    return (
            <Stack spacing='5' backgroundColor={'white'} marginLeft={'-50'}>
                <VStack border={'solid'} borderColor={'black'} padding={'5'} borderRadius={'10'}
                    margin={'10'} backgroundColor={'gray.200'}>
                    
                    <Image
                        src={avatar_url}
                        alt={name}
                        borderRadius='lg'
                        width={'10'}
                        alignSelf={'center'}
                    />
                    <Heading size='md' textAlign={'center'}>{name}</Heading>
                    <Text fontSize={'sm'} textColor={'green'}>"{catchphrase}!"</Text>
                    <HStack alignSelf={'center'}>
                        <Text fontSize={'xs'} backgroundColor={'limegreen'} color={'white'} 
                        padding={'1.5'} borderRadius={'10'}
                        >Health: {health}</Text>
                        <Text fontSize={'xs'} backgroundColor={'red'} color={'white'}
                        padding={'1.5'} borderRadius={'10'}
                        >Damage: {damage}</Text>
                        <Text fontSize={'xs'} backgroundColor={'blue'} color={'white'}
                        padding={'1.5'} borderRadius={'10'}
                        >Armour: {armor}</Text>
                    </HStack>
                </VStack>
            </Stack>

    )
}