@WebServlet("/ChatServlet")
public class ChatServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = (String) request.getSession().getAttribute("username");
        String message = request.getParameter("message");

        Connection con = Database.getConnection();
        try {
            PreparedStatement ps = con.prepareStatement("INSERT INTO messages (user_id, message) VALUES ((SELECT id FROM users WHERE username=?), ?)");
            ps.setString(1, username);
            ps.setString(2, message);
            ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
