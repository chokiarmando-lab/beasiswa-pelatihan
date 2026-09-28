  const express = require("express");
  const cors = require("cors");
  const dotenv = require("dotenv");
  const helmet = require("helmet");
  const { createProxyMiddleware } = require("http-proxy-middleware");

  dotenv.config();

  const app = express();

  app.use(cors());
  app.use(helmet());

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

  app.use(
    "/api/auth",

    createProxyMiddleware({

      target: process.env.AUTH_SERVICE_URL,

      changeOrigin: true,

      pathRewrite: {

        "^/":
        "/api/auth/",

      },

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