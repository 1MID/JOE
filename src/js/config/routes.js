import MainContainer from "../components/container/MainContainer";
import SystemSetting from "../components/container/menuContainer/SystemSetting";
import ObjectManagementContainer from "../components/container/menuContainer/ObjectManagementContainer";
import UserContainer from "../components/container/menuContainer/UserContainer"
import BigScreenContainer from "../components/container/bigScreen/BigScreenContainer"
import About from "../components/container/About"
import TrackingHistoryContainer from "../components/container/menuContainer/TrackingHistoryContainer"
import MonitorSettingContainer from "../components/container/menuContainer/MonitorSettingContainer"
import ReportContainer from "../components/container/menuContainer/ReportContainer"

const routes = [
    {
        path: '/',
        component: MainContainer,
        exact: true,
    },
    {
        path: '/page/systemSetting',
        component: SystemSetting,
        exact: true,
    },
    {
        path: '/page/objectManagement',
        component: ObjectManagementContainer,
        exact: true,
    },
    {
        path: '/page/userSetting',
        component: UserContainer,
        exact: true,
    },
    {
        path: '/page/bigScreen',
        component: BigScreenContainer,
        exact: true,
    },
    {
        path: '/page/about',
        component: About,
        exact: true,
    },
    {
        path: '/page/trackingHistory',
        component: TrackingHistoryContainer,
        exact: true,
    },
    {
        path: '/page/monitor',
        component: MonitorSettingContainer,
        exact: true,
    },
    {
        path: '/page/report',
        component: ReportContainer,
        exact: true,
    },
];

export default routes;