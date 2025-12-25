import { Image, ScrollView, Text, View } from 'react-native'

export default function HomeScreen() {
  return (

    <ScrollView>
      <View className='p-4'>
        <View className='flex flex-row'>
          <View className='gap-4'>
            <Text className='text-2xl font-semibold'>
              Are you in an emergency?
            </Text>
            <Text>
              Press the SOS button , your live location will be sharedwith the nearest help center and your energency contacts.
            </Text>
          </View>
          <Text>Image</Text>
        </View>
      </View>
    </ScrollView>
  )
}
