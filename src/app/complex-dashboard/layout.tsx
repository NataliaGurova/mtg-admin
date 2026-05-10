// import Notifications from "./@notifications/page";
// import RevenueMetrics from "./@revenue/page";
// import UserAnalytics from "./@users/page";

const ComplexDashboardLayout = async ({
  children,
  users,
  revenue,
  notifications,
  login
}: Readonly<{
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}>) => {

  const isLoggedIn = true;

  return isLoggedIn ? (    
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1/2">{notifications}</div>
      </div>
      {/* <UserAnalytics />
      <RevenueMetrics />
      <Notifications/> */}
    </div>
  ) : (
      login
  );
};

export default ComplexDashboardLayout;