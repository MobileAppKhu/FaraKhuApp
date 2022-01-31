import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Announcement from '../pages/main/Announcements/Announcement/Announcement'
import AnnouncementView from '../pages/main/Announcements/AnnouncementView/AnnouncementView'
import CreateAnnouncement from '../pages/main/Announcements/CreateAnnouncement/CreateAnnouncement'
import Dashboard from '../pages/main/Dashboard/Dashboard'
import MyCoursesMainPage from '../pages/main/MyCourses/MyCoursesMainPage/MyCoursesMainPage'
import EditAnnouncement from './../pages/main/Announcements/EditAnnouncement/EditAnnouncement'
import Setting from '../pages/main/MenuPages/Setting/Setting'
import MyCoursesCreateCourse from './../pages/main/MyCourses/MyCoursesCreateCourse/MyCoursesCreateCourse'
import MyCoursesCourseView from '../pages/main/MyCourses/MyCoursesCourseView/MyCoursesCourseView'
import BookShopView from '../pages/main/BookShop/BookShopView/BookShopView'
import PersonalCalendar from '../pages/main/Calendar/PersonalCalendar/PersonalCalendar'
import CreatToDo from './../pages/main/Calendar/CreateToDo/CreateToDo'
import ToDoDetails from '../pages/main/Calendar/ToDoDetails'
import EditToDo from '../pages/main/Calendar/EditToDo/EditToDo'
import ProfileMainPage from '../pages/main/MenuPages/Profile/ProfileMainPage/ProfileMainPage'
import BookShopCreate from './../pages/main/BookShop/BookShopCreate/BookShopCreate'
import Guide from './../pages/main/BookShop/Guide/Guide'
import EachBookShop from '../pages/main/BookShop/EachBookShop/EachBookShop'
const Stack = createStackNavigator()

export default function DashboardNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="mainpage">
      <Stack.Screen name="landing-page" component={Dashboard} />
      <Stack.Screen name="announcement" component={Announcement} />
      <Stack.Screen name="announcement-item" component={AnnouncementView} />
      <Stack.Screen name="create-announcement" component={CreateAnnouncement} />
      <Stack.Screen name="edit-announcement" component={EditAnnouncement} />
      <Stack.Screen name="setting" component={Setting} />
      <Stack.Screen name="my-courses-main-page" component={MyCoursesMainPage} />
      <Stack.Screen name="create-course" component={MyCoursesCreateCourse} />
      <Stack.Screen name="course-view" component={MyCoursesCourseView} />
      <Stack.Screen name="edit-todo" component={EditToDo} />
      <Stack.Screen name="bookshop-create" component={BookShopCreate} />
      <Stack.Screen name="guide" component={Guide} />
      <Stack.Screen name="create-todo" component={CreatToDo} />
      <Stack.Screen name="bookshop-view" component={BookShopView} />
      <Stack.Screen name="personal-calendar" component={PersonalCalendar} />
      <Stack.Screen name="todo-details" component={ToDoDetails} />
      <Stack.Screen name="each-bookshop" component={EachBookShop} />
      <Stack.Screen name="profile-main-page" component={ProfileMainPage} />
    </Stack.Navigator>
  )
}
