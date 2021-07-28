module.exports = (req, res) => {
  // Best HTTP status code for maintenance mode: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#5xx_server_errors
  res.status(503);
  return res.render('maintenance.hbs', {
    title: 'Github for Jira - Under Maintenance',
    APP_URL: process.env.APP_URL,
  });
};
