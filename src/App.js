import { useRecoilValue } from "recoil";
import { Route, Routes, Navigate } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Contactus } from "./pages/Contactus/Contactus";
import { Page404 } from "./pages/Error/Page404";
import { Editorial } from "./pages/Blog/Editorial";
import { Vacancies } from "./pages/Blog/Vacancies";
import { BlogDetail } from "./pages/Blog/BlogDetail";
import { CurrentAffair } from "./pages/Blog/CurrentAffair";
import { Saved } from "./pages/Dashboard/Saved";
import { Settings } from "./pages/Dashboard/Settings";
import { MyLibrary } from "./pages/Dashboard/MyLibrary";
import { MyCourses } from "./pages/Dashboard/MyCourses";
import { MyTestSeries } from "./pages/Dashboard/MyTestSeries";
import { Profile } from "./pages/User/Profile";
import { Course } from "./pages/Course/Course";
import { CourseDetail } from "./pages/Course/CourseDetail";
import { Cart } from "./pages/Order/Cart";
import { Success } from "./pages/Order/Success";
import { Checkout } from "./pages/Order/Checkout";
import { TestSeries } from "./pages/TestSeries/TestSeries";
import { TestSeriesDetail } from "./pages/TestSeries/TestSeriesDetail";
import { Learning } from "./pages/Learning/Learning";
import { OnlineTestPage } from "./pages/OnlineTestPage/OnlineTestPage";
import { TestsetPage } from "./pages/TestsetPage/TestsetPage";
import { TestsetPerformancePage } from "./pages/TestsetPerformancePage/TestsetPerformancePage";
import { Logout } from "./pages/Logout/Logout";
import { AdminPanel } from "./pages/Admin/AdminPanel";
import { Dashboard } from "./pages/Admin/Dashboard";

import { Layout } from "./components/Layout/Layout";
import { CourseLayout } from "./components/Layout/Course/CourseLayout";
import { DashboardLayout } from "./components/Layout/DashboardLayout/DashboardLayout";
import { ProtectedRoute } from "./components/Layout/ProtectedRoute";

import { authAtom } from "./state/atoms/authAtom";
import { PaymentMgmt } from "./pages/Admin/Payment/PaymentMgmt";
import { UserMgmt } from "./pages/Admin/User/UserMgmt";
import { CourseMgmt } from "./pages/Admin/Course/CourseMgmt";
import { AddCourse } from "./pages/Admin/Course/AddCourse";
import { ProductMgmt } from "./pages/Admin/ProductMgmt";
import { TestMgmt } from "./pages/Admin/Test/TestMgmt";
import { AddTest } from "./pages/Admin/Test/AddTest";
import { StudentMgmt } from "./pages/Admin/StudentMgmt";
import { FacMgmt } from "./pages/Admin/Faculty/FacMgmt";
import { AddFac } from "./pages/Admin/Faculty/AddFac";
import { EditFac } from "./pages/Admin/Faculty/EditFac";
import { EditUser } from "./pages/Admin/User/EditUser";
import { AddUser } from "./pages/Admin/User/AddUser";
import { UserProfile } from "./pages/Admin/User/UserProfile";
import { OrderDetails } from "./pages/Admin/Payment/OrderDetails";
import { CalendarPage } from "./pages/Admin/Calendar/CalendarPage";

function App() {
  const auth = useRecoilValue(authAtom);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="logout" element={<Logout />} />

        {/* courses */}
        <Route path="courses">
          <Route index element={<Course />} />

          <Route element={<CourseLayout />}>
            <Route path="academic" element={<Course courseType="academic" />} />
            <Route path="non-academic" element={<Course courseType="non-academic" />} />
          </Route>

          <Route path="academic/:courseId" element={<CourseDetail courseType="academic" />} />
          <Route
            path="non-academic/:courseId"
            element={<CourseDetail courseType="non-academic" />}
          />
        </Route>

        {/* test series */}
        <Route path="test_series">
          <Route index element={<TestSeries />} />
          <Route path=":testseriesId" element={<TestSeriesDetail />} />
          <Route path=":testseriesId/testset" element={<TestsetPage />} />
          <Route
            path=":testseriesId/testset/:testsetId/performance"
            element={<TestsetPerformancePage />}
          />
        </Route>

        {/* reading routes */}
        <Route path="reading">
          <Route index element={<CurrentAffair />} />
          <Route path="current_affairs">
            <Route index element={<CurrentAffair />} />
            <Route path=":id" element={<BlogDetail category="CurrentAffair" />} />
          </Route>
          <Route path="editorials">
            <Route index element={<Editorial />} />
            <Route path=":id" element={<BlogDetail category="Editorial" />} />
          </Route>
          <Route path="vacancies">
            <Route index element={<Vacancies />} />
            <Route path="job/:id" element={<BlogDetail category="Job" />} />
            <Route path="result/:id" element={<BlogDetail category="Result" />} />
          </Route>
        </Route>

        {/* protected routes */}
        <Route element={<ProtectedRoute auth={auth} />}>
          <Route path="profile" element={<Profile />} />

          {/* order */}
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment/success" element={<Success />} />

          {/* dashboard routes */}
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<MyCourses />} />
            <Route path="courses" element={<MyCourses />} />
            <Route path="test-series" element={<MyTestSeries />} />
            <Route path="library" element={<MyLibrary />} />
            <Route path="saved" element={<Saved />} />
            <Route path="help" element={<Navigate to="/contactus" replace />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* course learning */}
          <Route path="/study/mycourses/:id" element={<Learning />} />
        </Route>
      </Route>

      <Route path="admin" >
        <Route index element={<AdminPanel />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="payment">
          <Route index element={<PaymentMgmt />} />
          <Route path="details" element={<OrderDetails />} />
        </Route>
        <Route path="user">
          <Route index element={<UserMgmt />} />
          <Route path="editUser" element={<EditUser />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
        <Route path="course">
          <Route index element={<CourseMgmt />}/>
          <Route path="addCourse" element={<AddCourse />}/>
        </Route>

        <Route path="product" element={<ProductMgmt />} />
        <Route path="test">
          <Route index element={<TestMgmt />} />
          <Route path="addTest" element={<AddTest />} />
        </Route>
        <Route path="student" element={<StudentMgmt />} />
        <Route path="faculty">
          <Route index element={<FacMgmt />} />
          <Route path="addfaculty" element={<AddFac />} />
        </Route>
        <Route path="editfaculty" element={<EditFac />} />
        <Route path="calendar" element={<CalendarPage />} />
      </Route>
      
      {/* online test */}
      <Route element={<ProtectedRoute auth={auth} />}>
        <Route path="/onlinetest/:onlineTestId" element={<OnlineTestPage />} />
      </Route>

      {/* 404 page */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
