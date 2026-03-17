import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import { Image, ImageBackground,Text, View } from 'react-native'


const TabIcon=({focused,icon,title}:any)=>{
   if(focused){
    return(
       <ImageBackground
                source={images.highlight}
                className='min-w-[114px] min-h-16 mt-4 flex-row items-center justify-center rounded-full overflow-hidden'
                >
               <Image source={icon} tintColor="#151312" className='w-5 h-5'/>
               <Text className='text-secondary text-base ml-4 font-semibold'>{title}</Text>
                </ImageBackground>
          
    )
   }
   return(
    <View className='size-full justify-center items-center mt-4 rounded-full'>
      <Image source={icon} tintColor="#A8B5DB" className='w-5 h-5'/>
    </View>
   )
     
  
               
  
}
const _layout = () => {
  return (
    <Tabs
    screenOptions={
      {tabBarShowLabel:false,
        tabBarItemStyle:{
          width:'100%',
          height: '100%',
          justifyContent:'center',
          alignItems:'center',

        },
        tabBarStyle:{
          position:'absolute',
          backgroundColor:'#0f0D23',
          borderRadius:50,
          marginHorizontal:20,
          marginBottom:36,
          height:55,
          overflow:'hidden',
          borderWidth:1,
          borderColor:'#0f0d23'
       }
      }
    }
    >
      <Tabs.Screen 
        name="index" 
        options={
          {title:"Home", headerShown: false ,
            tabBarIcon:({focused})=>(
              <TabIcon
              focused={focused}
              icon={icons.home}
              title="Home"  
               />
            )
               
            

          }} 
      />
      <Tabs.Screen 
        name="search" 
        options={{ title:"Search", headerShown: false, 
          tabBarIcon:({focused})=>(
            <TabIcon
              focused={focused}
              icon={icons.search}
              title="Search"  
            />
          )
        }} 
      />
         <Tabs.Screen 
        name="saved" 
        options={{ title:"Saved", headerShown: false ,
          tabBarIcon:({focused})=>(
            <TabIcon
              focused={focused}
              icon={icons.save}
              title="Saved"  
            />
          )
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ title:"Profile", headerShown: false ,
          tabBarIcon:({focused})=>(
            <TabIcon
              focused={focused}
              icon={icons.person}
              title="Profile"  
            />
          )
        }} 
      />
     
    </Tabs>
  )
}

export default _layout  