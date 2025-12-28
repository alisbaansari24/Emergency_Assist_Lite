import { Image, ScrollView, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen() {
  const emergencyTab = [
    {
      iconName: 'medical-services',
      name: "Medical"
    },
    {
      iconName: 'medical-services',
      name: "Fire"
    },
    {
      iconName: 'medical-services',
      name: "Natural Disaster"
    },
    {
      iconName: 'medical-services',
      name: "Accident"
    },
    {
      iconName: 'medical-services',
      name: "Voilence"
    },
     {
      iconName: 'medical-services',
      name: "Rescue"
    }
  ]
  return (

    <ScrollView>
      <View className='p-4 bg-white'>
        <View className='flex-row items-center justify-between '>
          <View className='flex-1 gap-2 pr-3'>
            <Text className='text-2xl font-semibold'>
              Are you in an emergency?
            </Text>
            <Text className='text-[15px] '>
              Press the SOS button , your live location will be sharedwith the nearest help center and your energency contacts.
            </Text>
          </View>
          <Image
            source={require('../../assets/images/emergency (2).png')}
            style={{ width: 150, height: 200, borderRadius: 100 }}
            className="w-24 h-full bg-yellow-600"
            resizeMode='contain'
          />
        </View>
        <View className='mt-4 pt-4 flex px-auto justify-center items-center bg-[#ebe9f5] rounded-3xl shadow-slate-600 shadow-md'>
          <Image
            source={require('../../assets/images/sos.png')}
            // style={{width:100, height:100}}
            className='h-auto w-auto'
          />
        </View>
        <View className='pt-5 gap-2'>
          <Text className='text-2xl font-semibold'>
            What's your emergency?
          </Text>
          <View className='flex-row gap-2 flex-wrap'>
            {emergencyTab.map((item, index) => (
              <View key={index} className=''>
                <View className='flex-row rounded-full border py-1 px-2 gap-1 items-center justify-center'>
                  <MaterialIcons
                    name={item.iconName}
                    size={20}
                    className=' bg-[#f59263] rounded-full p-2' />
                  <Text className='text-md font-medium'>{item?.name}</Text>
                </View>
              </View>
            ))}

          </View>
        </View>
      </View>
    </ScrollView>
  )
}
