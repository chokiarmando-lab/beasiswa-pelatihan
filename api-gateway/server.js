  const express = require("express");
  const cors = require("cors");
  const dotenv = require("dotenv");
  const helmet = require("helmet");
  const { createProxyMiddleware } = require("http-proxy-middleware");
  const rateLimit = require("express-rate-limit");

  dotenv.config();

  const app = express();

  app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
  app.use(
 helmet({
    contentSecurityPolicy:false
 })
);

  const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 menit
  max: 100, // maksimal 100 request/IP
  standardHeaders: true,
  legacyHeaders: false,

  message: {
    success: false,
    message: "Too many requests, try again later"
  }
});


app.use(limiter);


app.use(express.json());


  const PORT = process.env.PORT || 3000;


  // =======================
  // Request Logger
  // =======================

  app.use((req, res, next) => {

    console.log(
      "Gateway:",
      req.method,
      req.originalUrl
    );

    next();

  });



  // =======================
  // Auth Service
  // =======================

  const loginLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10
});

  app.use(
    "/api/auth",
    loginLimiter,
    createProxyMiddleware({

      target: process.env.AUTH_SERVICE_URL,

      changeOrigin: true,

      pathRewrite: {
        "^/": "/api/auth/"
      },

      on: {

        proxyReq(proxyReq, req) {
          console.log(
            "AUTH REQUEST:",
            req.method,
            req.originalUrl,
            "=>",
            proxyReq.path
          );
        },


        proxyRes(proxyRes, req) {
          console.log(
            "AUTH RESPONSE:",
            proxyRes.statusCode,
            req.originalUrl
          );
        },


        error(err) {
          console.error(
            "AUTH ERROR:",
            err.message
          );
        }

      }

    })
  );



  // =======================
  // Master Service
  // =======================

  app.use(
    "/api/master",

    createProxyMiddleware({

      target: process.env.MASTER_SERVICE_URL,

      changeOrigin:true,

      pathRewrite: {

        "^/":
        "/api/",

      },

    })
  );



  // =======================
  // Selection Service
  // =======================


app.use(
  "/api/selections",
  createProxyMiddleware({
    target: process.env.SELECTION_SERVICE_URL,
    changeOrigin: true,

    pathRewrite: function(path, req) {
      return "/api/selections" + path;
    },

    on:{
      proxyReq(proxyReq, req){
        console.log(
          "SELECTION PROXY:",
          req.method,
          req.originalUrl,
          "=>",
          proxyReq.path
        );
      },

      proxyRes(proxyRes, req){
        console.log(
          "SELECTION RESPONSE:",
          proxyRes.statusCode,
          req.originalUrl
        );
      }
    }
  })
);


  // =======================
  // Application Service
  // =======================

  app.use(
    "/api/applications",

    createProxyMiddleware({

      target: process.env.APPLICATION_SERVICE_URL,

      changeOrigin:true,


      pathRewrite:(path)=>{

        const newPath =
          "/api/applications" + path;


        console.log(
          "Application Path:",
          path,
          "→",
          newPath
        );


        return newPath;

      },


      on: {


        proxyReq:(proxyReq, req)=>{


          console.log(

            "Application Proxy:",

            req.method,

            req.originalUrl,

            "→",

            process.env.APPLICATION_SERVICE_URL +
            proxyReq.path

          );


        },



        proxyRes:(proxyRes, req)=>{


          console.log(

            "Application Response:",

            proxyRes.statusCode,

            req.method,

            req.originalUrl

          );


        },


        error:(err)=>{


          console.error(

            "Application Proxy Error:",

            err.message

          );


        }


      }


    })

  );




  // =======================
  // Education Work Service
  // =======================

  app.use(
    "/api/education-work",

    createProxyMiddleware({

      target: process.env.APPLICATION_SERVICE_URL,

      changeOrigin:true,


      pathRewrite:(path)=>{


        const newPath =
          "/api/education-work" + path;


        console.log(

          "Education Work Path:",

          path,

          "→",

          newPath

        );


        return newPath;


      },


      on:{


        proxyReq:(proxyReq, req)=>{


          console.log(

            "Education Work Proxy:",

            req.method,

            req.originalUrl,

            "→",

            process.env.APPLICATION_SERVICE_URL +
            proxyReq.path

          );


        },



        proxyRes:(proxyRes, req)=>{


          console.log(

            "Education Work Response:",

            proxyRes.statusCode,

            req.method,

            req.originalUrl

          );


        },


        error:(err)=>{


          console.error(

            "Education Work Proxy Error:",

            err.message

          );


        }


      }


    })

  );




  // =======================
  // Documents Service
  // =======================

  app.use(
    "/api/documents",

    createProxyMiddleware({

      target: process.env.APPLICATION_SERVICE_URL,

      changeOrigin:true,


      pathRewrite:(path)=>{

        return "/api/documents" + path;

      },


    })

  );




  // =======================
  // Verification Service
  // =======================

  app.use(
    "/api/verifications",

    createProxyMiddleware({

      target: process.env.SELECTION_SERVICE_URL,

      changeOrigin:true,

      pathRewrite:{

        "^/":
        "/api/verifications/",

      },

    })
  );




  // =======================
  // Finance Service
  // =======================

app.use(
  "/api/disbursements",
  createProxyMiddleware({
    target: process.env.FINANCE_SERVICE_URL,
    changeOrigin: true,

    pathRewrite: function (path, req) {
      return "/api/disbursements" + path;
    }
  })
);


app.use(
  "/api/odoo",
  createProxyMiddleware({
    target: process.env.FINANCE_SERVICE_URL,
    changeOrigin: true,

    pathRewrite: function (path, req) {
      return "/api/odoo" + path;
    }
  })
);



  // =======================
  // Health Check
  // =======================

  app.get(
    "/api/health",
    (req,res)=>{

      res.json({

        message:
        "API Gateway is running"

      });

    }

  );




  // =======================
  // Start Server
  // =======================

  app.listen(
    PORT,
    ()=>{

      console.log(
        `API Gateway running on http://localhost:${PORT}`
      );

    }
  );