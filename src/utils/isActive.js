// import {
//   Routes,
//   Route,
//   Outlet,
//   Link,
//   useMatch,
//   useResolvedPath,
//   NavLink,
// } from "react-router-dom";

// function CustomLink({ children, to, ...props }) {
//   let resolved = useResolvedPath(to);
//   let match = useMatch({ path: resolved.pathname, end: true });

//   return (
//     <div>
//       <NavLink
//         style={{ textDecoration: match ? "underline" : "none" }}
//         to={to}
//         {...props}
//       >
//         {children}
//       </NavLink>

//       <Outlet />
//     </div>
//   );
// }

// export default CustomLink;
