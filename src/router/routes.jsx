
import Layout from './../components/layout/Layout';
import Home1 from '../components/layout/Home';
import Home from '../components/Home';
import Login from '../components/auth/Login';
import SignupStepOne from '../components/auth/signup/SignupStepOne';
import SignupStepTwo from '../components/auth/signup/SignupStepTwo';

import EditAccount from '../components/auth/EditAccount';
import SelectDestinations from '../components/traveller/SelectDestination';
import Membership from '../components/traveller/MemberShip';
import YourTrips from '../components/traveller/YourTrip';
import DestinationWishList from '../components/traveller/DestinationWishlist';
import WelcomeBack from '../components/traveller/WelcomeBack';
import ScheduleWalker from '../components/traveller/ScheduleWalker';
import ScheduleTrip from '../components/traveller/ScheduleTrip';
import WalkerKit from '../components/traveller/WalkerKit';
import WalkerTerms from '../components/traveller/WalkerTerms';



export const publicRoutes = [
  {
    key: '/',
    exact: true,
    path: '/',
    component: Home,
    layout: Layout,
  },
  {
    key: 'login',
    exact: true,
    path: '/login',
    component: Login,
    layout: Layout,
  },
  {
    key: 'register',
    exact: true,
    path: '/register',
    component: SignupStepOne,
    layout: Layout,
  },
  {
    key: 'otpVerification',
    exact: true,
    path: '/otp-verification',
    component: SignupStepTwo,
    layout: Layout,
  },
  {
    key: 'editAccount',
    exact: true,
    path: '/edit-account',
    component: EditAccount,
    layout: Layout,
  },
  {
    key: 'selectDestinations',
    exact: true,
    path: '/select-destinations',
    component: SelectDestinations,
    layout: Layout,
  },
  {
    key: 'membership',
    exact: true,
    path: '/membership',
    component: Membership,
    layout: Layout,
  },
  {
    key: 'yourTrips',
    exact: true,
    path: '/your-trips',
    component: YourTrips,
    layout: Layout,
  },
  {
    key: 'destinationWishList',
    exact: true,
    path: '/destination-wishlist',
    component: DestinationWishList,
    layout: Layout,
  },
  {
    key: 'welcomeBack',
    exact: true,
    path: '/welcome-back',
    component: WelcomeBack,
    layout: Layout,
  },
  {
    key: 'scheduleWalker',
    exact: true,
    path: '/schedule-walker',
    component: ScheduleWalker,
    layout: Layout,
  },
  {
    key: 'scheduleTrip',
    exact: true,
    path: '/schedule-trip',
    component: ScheduleTrip,
    layout: Layout,
  },
  {
    key: 'walkerKit',
    exact: true,
    path: '/walker-kit',
    component: WalkerKit,
    layout: Layout,
  },
  {
    key: 'walkerTerms',
    exact: true,
    path: '/walker-terms',
    component: WalkerTerms,
    layout: Layout,
  }


];

export const privateRoutes = [
  {
    key: 'home',
    exact: true,
    path: '/home',
    component: Home1,
    layout: Layout,
  },
];
