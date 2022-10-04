const PrivateRoute = (props) => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    return <>{props.children}</>;
};
export default PrivateRoute;
