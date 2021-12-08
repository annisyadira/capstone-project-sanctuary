import SignUp from '../views/pages/signup';
import { SignIn } from '../views/pages/signin';
import Article from '../views/pages/article';
import Story from '../views/pages/story';
import WriteStory from '../views/pages/writestory';

const routes = {
  '/signup': SignUp,
  '/signin': SignIn,
  '/article': Article,
  '/story': Story,
  '/writestory': WriteStory
};

export default routes;
