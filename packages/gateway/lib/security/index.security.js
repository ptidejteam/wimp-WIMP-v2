const session = require("express-session");
const {
  minimumPermissionLevelRequired,
} = require("./authorization/authorization.permission");
const {
  validJWTNeeded,
  validRefreshNeeded,
  verifyRefreshBodyField,
} = require("./authorization/authorization.validation");
const config = require("./env.config");

const Master = config.permissionLevels.Master;
const Surfer = config.permissionLevels.Surfer;
const Member = config.permissionLevels.Member;

/**
 * Setup Authentication protection using Keycloak
 * @param {*} app
 * @param {*} routes
 */
exports.setupAuthentication = (app, routes) => {
  const memoryStore = new session.MemoryStore();
  app.use(
    session({
      secret: "XoR?qWvo:RYM,iX;2Tz_>{++gGIP16",
      resave: true,
      saveUninitialized: true,
      store: memoryStore,
    })
  );
   routes.forEach((route) => {
    if (route.authenticationRequired) {
      app.use(
        route.url,
        !route.refresh
          ? [validJWTNeeded, minimumPermissionLevelRequired(Surfer)]
          : [validJWTNeeded, verifyRefreshBodyField, validRefreshNeeded],
        function (req, res, next) {
          next();
        }
      );
    }
  });
};
