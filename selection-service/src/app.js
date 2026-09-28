import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import verificationRoutes from './src/routes/verification.routes.js';
import selectionRoutes from './src/routes/selection.routes.js';

const app = express();

app.use(cors());
app.use(express.json());


app.use((req,res,next)=>{
  console.log(
    "SELECTION SERVICE:",
    req.method,
    req.url
  );
  next();
});


app.get('/api/health', (req,res)=>{
  res.json({
    status:'ok',
    service:'selection-service'
  });
});


app.use('/api/verifications', verificationRoutes);

app.use('/api/selections', selectionRoutes);


const PORT = process.env.PORT || 3004;


app.listen(PORT,()=>{
  console.log(
    `Selection Service running on port ${PORT}`
  );
});