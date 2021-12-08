import SignUp from '../views/pages/signup';
import { SignIn } from '../views/pages/signin';
import Article from '../views/pages/article';
import Story from '../views/pages/story';
import WriteStory from '../views/pages/writestory';
import AboutUs from '../views/pages/aboutus';

const routes = {
  '/signup': SignUp,
  '/signin': SignIn,
  '/article': Article,
  '/story': Story,
  '/writestory': WriteStory,
  '/aboutus': AboutUs,
};

export default routes;
