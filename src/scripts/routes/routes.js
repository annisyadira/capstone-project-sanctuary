import SignUp from '../views/pages/signup';
import { SignIn } from '../views/pages/signin';
import Article from '../views/pages/article';
import Story from '../views/pages/story';
import WriteStory from '../views/pages/writestory';
import AboutUs from '../views/pages/aboutus';
import ArticleDetail from '../views/pages/article-detail';
import StoryDetail from '../views/pages/story-detail';

const routes = {
  '/signup': SignUp,
  '/signin': SignIn,
  '/article': Article,
  '/story': Story,
  '/writestory': WriteStory,
  '/aboutus': AboutUs,
  '/article-detail/:id': ArticleDetail,
  '/story-detail/:id': StoryDetail,
};

export default routes;
