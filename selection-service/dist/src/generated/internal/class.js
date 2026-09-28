"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.10.0",
    "engineVersion": "0edf323efd1d98336f3f0a68684b56f689b900d3",
    "activeProvider": "mysql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../src/generated\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n}\n\nmodel Verification {\n  id            Int @id @default(autoincrement())\n  applicationId Int @unique\n\n  status     VerificationStatus @default(PENDING)\n  notes      String?            @db.Text\n  verifiedBy Int?\n  verifiedAt DateTime?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([status])\n  @@index([verifiedBy])\n}\n\nmodel Selection {\n  id            Int @id @default(autoincrement())\n  applicationId Int @unique\n\n  institutionId Int?\n  score         Float?\n  notes         String?         @db.Text\n  status        SelectionStatus @default(PENDING)\n  selectedAt    DateTime?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([status])\n  @@index([institutionId])\n  @@index([score])\n}\n\nenum VerificationStatus {\n  PENDING\n  VERIFIED\n  REVISION\n  REJECTED\n}\n\nenum SelectionStatus {\n  PENDING\n  SELECTED\n  NOT_SELECTED\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Verification\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"applicationId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"VerificationStatus\"},{\"name\":\"notes\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"verifiedBy\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"verifiedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null},\"Selection\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"applicationId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"institutionId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"score\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"notes\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"SelectionStatus\"},{\"name\":\"selectedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"Verification.findUnique\",\"Verification.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"Verification.findFirst\",\"Verification.findFirstOrThrow\",\"Verification.findMany\",\"data\",\"Verification.createOne\",\"Verification.createMany\",\"Verification.updateOne\",\"Verification.updateMany\",\"create\",\"update\",\"Verification.upsertOne\",\"Verification.deleteOne\",\"Verification.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"Verification.groupBy\",\"Verification.aggregate\",\"Selection.findUnique\",\"Selection.findUniqueOrThrow\",\"Selection.findFirst\",\"Selection.findFirstOrThrow\",\"Selection.findMany\",\"Selection.createOne\",\"Selection.createMany\",\"Selection.updateOne\",\"Selection.updateMany\",\"Selection.upsertOne\",\"Selection.deleteOne\",\"Selection.deleteMany\",\"Selection.groupBy\",\"Selection.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"applicationId\",\"institutionId\",\"score\",\"notes\",\"SelectionStatus\",\"status\",\"selectedAt\",\"createdAt\",\"updatedAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"search\",\"VerificationStatus\",\"verifiedBy\",\"verifiedAt\",\"_relevance\",\"set\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "aBEcCygAAFIAMCkAAAQAECoAAFIAMCsCAAAAASwCAAAAAS8BAEoAITEAAFNCIjNAAE0AITRAAE0AIUICAEgAIUNAAEwAIQEAAAABACABAAAAAQAgCygAAFIAMCkAAAQAECoAAFIAMCsCAEcAISwCAEcAIS8BAEoAITEAAFNCIjNAAE0AITRAAE0AIUICAEgAIUNAAEwAIQQvAABUACBCAABUACBDAABUACBEAABoACADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAIKwIAAAABLAIAAAABLwEAAAABMQAAAEICM0AAAAABNEAAAAABQgIAAAABQ0AAAAABAQgAAAkAIAgrAgAAAAEsAgAAAAEvAQAAAAExAAAAQgIzQAAAAAE0QAAAAAFCAgAAAAFDQAAAAAEBCAAACwAwCCsCAFoAISwCAFoAIS8BAF0AITEAAGdCIjNAAGAAITRAAGAAIUICAFsAIUNAAF8AIQIAAAABACAIAAANACAIKwIAWgAhLAIAWgAhLwEAXQAhMQAAZ0IiM0AAYAAhNEAAYAAhQgIAWwAhQ0AAXwAhAgAAAAQAIAgAAA8AIAMAAAABACANAAAJACAOAAANACABAAAAAQAgAQAAAAQAIAgTAABiACAUAABjACAVAABmACAWAABlACAXAABkACAvAABUACBCAABUACBDAABUACALKAAATgAwKQAAFQAQKgAATgAwKwIAMAAhLAIAMAAhLwEAMwAhMQAAT0IiM0AANgAhNEAANgAhQgIAMQAhQ0AANQAhAwAAAAQAIAMAABQAMBIAABUAIAMAAAAEACADAAAFADAEAAABACAMKAAARgAwKQAAGwAQKgAARgAwKwIAAAABLAIAAAABLQIASAAhLggASQAhLwEASgAhMQAASzEiMkAATAAhM0AATQAhNEAATQAhAQAAABgAIAEAAAAYACAMKAAARgAwKQAAGwAQKgAARgAwKwIARwAhLAIARwAhLQIASAAhLggASQAhLwEASgAhMQAASzEiMkAATAAhM0AATQAhNEAATQAhBS0AAFQAIC4AAFQAIC8AAFQAIDIAAFQAIEQAAGEAIAMAAAAbACADAAAcADAEAAAYACADAAAAGwAgAwAAHAAwBAAAGAAgAwAAABsAIAMAABwAMAQAABgAIAkrAgAAAAEsAgAAAAEtAgAAAAEuCAAAAAEvAQAAAAExAAAAMQIyQAAAAAEzQAAAAAE0QAAAAAEBCAAAIAAgCSsCAAAAASwCAAAAAS0CAAAAAS4IAAAAAS8BAAAAATEAAAAxAjJAAAAAATNAAAAAATRAAAAAAQEIAAAiADAJKwIAWgAhLAIAWgAhLQIAWwAhLggAXAAhLwEAXQAhMQAAXjEiMkAAXwAhM0AAYAAhNEAAYAAhAgAAABgAIAgAACQAIAkrAgBaACEsAgBaACEtAgBbACEuCABcACEvAQBdACExAABeMSIyQABfACEzQABgACE0QABgACECAAAAGwAgCAAAJgAgAwAAABgAIA0AACAAIA4AACQAIAEAAAAYACABAAAAGwAgCRMAAFUAIBQAAFYAIBUAAFkAIBYAAFgAIBcAAFcAIC0AAFQAIC4AAFQAIC8AAFQAIDIAAFQAIAwoAAAvADApAAAsABAqAAAvADArAgAwACEsAgAwACEtAgAxACEuCAAyACEvAQAzACExAAA0MSIyQAA1ACEzQAA2ACE0QAA2ACEDAAAAGwAgAwAAKwAwEgAALAAgAwAAABsAIAMAABwAMAQAABgAIAwoAAAvADApAAAsABAqAAAvADArAgAwACEsAgAwACEtAgAxACEuCAAyACEvAQAzACExAAA0MSIyQAA1ACEzQAA2ACE0QAA2ACENEwAAOAAgFAAARQAgFQAAOAAgFgAAOAAgFwAAOAAgNQIAAAABNgIAAAAENwIAAAAEOAIAAAABOQIAAAABOgIAAAABOwIAAAABPAIARAAhDRMAADsAIBQAAEIAIBUAADsAIBYAADsAIBcAADsAIDUCAAAAATYCAAAABTcCAAAABTgCAAAAATkCAAAAAToCAAAAATsCAAAAATwCAEMAIQ0TAAA7ACAUAABCACAVAABCACAWAABCACAXAABCACA1CAAAAAE2CAAAAAU3CAAAAAU4CAAAAAE5CAAAAAE6CAAAAAE7CAAAAAE8CABBACEPEwAAOwAgFgAAQAAgFwAAQAAgNQEAAAABNgEAAAAFNwEAAAAFOAEAAAABOQEAAAABOgEAAAABOwEAAAABPAEAPwAhPQEAAAABPgEAAAABPwEAAAABQAEAAAABBxMAADgAIBYAAD4AIBcAAD4AIDUAAAAxAjYAAAAxCDcAAAAxCDwAAD0xIgsTAAA7ACAWAAA8ACAXAAA8ACA1QAAAAAE2QAAAAAU3QAAAAAU4QAAAAAE5QAAAAAE6QAAAAAE7QAAAAAE8QAA6ACELEwAAOAAgFgAAOQAgFwAAOQAgNUAAAAABNkAAAAAEN0AAAAAEOEAAAAABOUAAAAABOkAAAAABO0AAAAABPEAANwAhCxMAADgAIBYAADkAIBcAADkAIDVAAAAAATZAAAAABDdAAAAABDhAAAAAATlAAAAAATpAAAAAATtAAAAAATxAADcAIQg1AgAAAAE2AgAAAAQ3AgAAAAQ4AgAAAAE5AgAAAAE6AgAAAAE7AgAAAAE8AgA4ACEINUAAAAABNkAAAAAEN0AAAAAEOEAAAAABOUAAAAABOkAAAAABO0AAAAABPEAAOQAhCxMAADsAIBYAADwAIBcAADwAIDVAAAAAATZAAAAABTdAAAAABThAAAAAATlAAAAAATpAAAAAATtAAAAAATxAADoAIQg1AgAAAAE2AgAAAAU3AgAAAAU4AgAAAAE5AgAAAAE6AgAAAAE7AgAAAAE8AgA7ACEINUAAAAABNkAAAAAFN0AAAAAFOEAAAAABOUAAAAABOkAAAAABO0AAAAABPEAAPAAhBxMAADgAIBYAAD4AIBcAAD4AIDUAAAAxAjYAAAAxCDcAAAAxCDwAAD0xIgQ1AAAAMQI2AAAAMQg3AAAAMQg8AAA-MSIPEwAAOwAgFgAAQAAgFwAAQAAgNQEAAAABNgEAAAAFNwEAAAAFOAEAAAABOQEAAAABOgEAAAABOwEAAAABPAEAPwAhPQEAAAABPgEAAAABPwEAAAABQAEAAAABDDUBAAAAATYBAAAABTcBAAAABTgBAAAAATkBAAAAAToBAAAAATsBAAAAATwBAEAAIT0BAAAAAT4BAAAAAT8BAAAAAUABAAAAAQ0TAAA7ACAUAABCACAVAABCACAWAABCACAXAABCACA1CAAAAAE2CAAAAAU3CAAAAAU4CAAAAAE5CAAAAAE6CAAAAAE7CAAAAAE8CABBACEINQgAAAABNggAAAAFNwgAAAAFOAgAAAABOQgAAAABOggAAAABOwgAAAABPAgAQgAhDRMAADsAIBQAAEIAIBUAADsAIBYAADsAIBcAADsAIDUCAAAAATYCAAAABTcCAAAABTgCAAAAATkCAAAAAToCAAAAATsCAAAAATwCAEMAIQ0TAAA4ACAUAABFACAVAAA4ACAWAAA4ACAXAAA4ACA1AgAAAAE2AgAAAAQ3AgAAAAQ4AgAAAAE5AgAAAAE6AgAAAAE7AgAAAAE8AgBEACEINQgAAAABNggAAAAENwgAAAAEOAgAAAABOQgAAAABOggAAAABOwgAAAABPAgARQAhDCgAAEYAMCkAABsAECoAAEYAMCsCAEcAISwCAEcAIS0CAEgAIS4IAEkAIS8BAEoAITEAAEsxIjJAAEwAITNAAE0AITRAAE0AIQg1AgAAAAE2AgAAAAQ3AgAAAAQ4AgAAAAE5AgAAAAE6AgAAAAE7AgAAAAE8AgA4ACEINQIAAAABNgIAAAAFNwIAAAAFOAIAAAABOQIAAAABOgIAAAABOwIAAAABPAIAOwAhCDUIAAAAATYIAAAABTcIAAAABTgIAAAAATkIAAAAAToIAAAAATsIAAAAATwIAEIAIQw1AQAAAAE2AQAAAAU3AQAAAAU4AQAAAAE5AQAAAAE6AQAAAAE7AQAAAAE8AQBAACE9AQAAAAE-AQAAAAE_AQAAAAFAAQAAAAEENQAAADECNgAAADEINwAAADEIPAAAPjEiCDVAAAAAATZAAAAABTdAAAAABThAAAAAATlAAAAAATpAAAAAATtAAAAAATxAADwAIQg1QAAAAAE2QAAAAAQ3QAAAAAQ4QAAAAAE5QAAAAAE6QAAAAAE7QAAAAAE8QAA5ACELKAAATgAwKQAAFQAQKgAATgAwKwIAMAAhLAIAMAAhLwEAMwAhMQAAT0IiM0AANgAhNEAANgAhQgIAMQAhQ0AANQAhBxMAADgAIBYAAFEAIBcAAFEAIDUAAABCAjYAAABCCDcAAABCCDwAAFBCIgcTAAA4ACAWAABRACAXAABRACA1AAAAQgI2AAAAQgg3AAAAQgg8AABQQiIENQAAAEICNgAAAEIINwAAAEIIPAAAUUIiCygAAFIAMCkAAAQAECoAAFIAMCsCAEcAISwCAEcAIS8BAEoAITEAAFNCIjNAAE0AITRAAE0AIUICAEgAIUNAAEwAIQQ1AAAAQgI2AAAAQgg3AAAAQgg8AABRQiIAAAAAAAAFRQIAAAABRgIAAAABRwIAAAABSAIAAAABSQIAAAABBUUCAAAAAUYCAAAAAUcCAAAAAUgCAAAAAUkCAAAAAQVFCAAAAAFGCAAAAAFHCAAAAAFICAAAAAFJCAAAAAEBRQEAAAABAUUAAAAxAgFFQAAAAAEBRUAAAAABAUABAAAAAQAAAAAAAUUAAABCAgFAAQAAAAEAAAUTAAQUAAUVAAYWAAcXAAgAAAAAAAUTAAQUAAUVAAYWAAcXAAgABRMADBQADRUADhYADxcAEAAAAAAABRMADBQADRUADhYADxcAEAECAQIDAQUGAQYHAQcIAQkKAQoMAgsOAQwQAg8RARASARETAhgWAxkXCRoZChsaChwdCh0eCh4fCh8hCiAjAiElCiInAiMoCiQpCiUqAiYtCycuEQ"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await Promise.resolve().then(() => __importStar(require('node:buffer')));
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_fast_bg.mysql.mjs"))),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_fast_bg.mysql.wasm-base64.mjs")));
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map