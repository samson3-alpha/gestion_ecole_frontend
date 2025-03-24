import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/dashboard'))
const Classes = lazy(() => import('../pages/classes'))
const ClasseDetails = lazy(() => import('../pages/ClassDetails'))
const AddClassForm =lazy(() => import('../Components/AddClassForm'))



const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/classes',
    component: Classes,
  },
  {
    path: '/classDetails/:id',
    component: ClasseDetails,
  },
  {
    path: 'addClassForm',
    component: AddClassForm,
  },
]

export default routes
