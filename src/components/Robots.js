import { Heading, Text, VStack, HStack, Stack, Image, Button } from "@chakra-ui/react"

export function Robots ({robot: {id, name, health, damage, armor, bot_class, catchphrase,
                            avatar_url, created_at, updated_at}}) {
    return (
            <Stack spacing= {'5'} backgroundColor={'white'} marginLeft={'-50'} borderRadius={'10'}>
                <VStack border={'solid'} borderColor={'black'} padding={'5'} borderRadius={'10'}
                    margin={'10'} backgroundColor={'gray.200'}>
                    
                    <Image
                        src={avatar_url}
                        alt={name}
                        borderRadius='lg'
                        width={'10'}
                        alignSelf={'center'}
                        /*id="avatar_url"*/
                        
                    />
                    <Heading size='md' textAlign={'center'} /*id="name"*/>{name}</Heading>
                    <Text fontSize={'sm'} textColor={'green'} /*id="catchphrase"*/>"{catchphrase}!"</Text>
                    <HStack alignSelf={'center'}>
                        <Text fontSize={'xs'} backgroundColor={'limegreen'} color={'white'} 
                        padding={'1.5'} borderRadius={'10'} /*id="health"*/
                        >Health: {health}</Text>
                        <Text fontSize={'xs'} backgroundColor={'red'} color={'white'}
                        padding={'1.5'} borderRadius={'10'} /*id="damage"*/
                        >Damage: {damage}</Text>
                        <Text fontSize={'xs'} backgroundColor={'blue'} color={'white'}
                        padding={'1.5'} borderRadius={'10'} /*id="armour"*/
                        >Armour: {armor}</Text>
                    </HStack>
                    <Button fontSize={'xs'} backgroundColor={'purple'} color={'white'}
                        padding={'1.5'} borderRadius={'10'} _hover={{backgroundColor: 'black'}}
                        >DRAFT!
                    </Button>
                </VStack>
            </Stack>

    )
}