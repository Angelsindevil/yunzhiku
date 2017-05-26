import info from '../components/info'
import infoDetail from '../components/infoDetail'
import mainMessage from '../components/mainMessage'
import accountInfo from '../components/accountInfo'
import collectPage from '../components/collectPage'
import editPassword from '../components/editPassword'
import announceDetail from '../components/announceDetail'
/* eslint-disable*/
const routes=[
	{ path: '/', component:info},
	{path:'/info',component:info},
    {path: '/infoDetail', component: infoDetail },
	{path:'/mainMessage',component:mainMessage,
	  children: [
	    {path:'',component:accountInfo},
	    {path:'accountInfo',component:accountInfo},
	    {path:'collectPage',component:collectPage},
	    {path:'downloadPage',component:collectPage},
	    {path:'announcementPage',component:collectPage},
	    {path:'feedbackPage',component:collectPage},
	    {path:'editPassword',component:editPassword},
	    {path:'announceDetail',component:announceDetail}
	  ],
	}
]
export default routes