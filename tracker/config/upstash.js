import { Client as WorkflowClient } from '@upstash/workflow';

import {
    QSTASH_URL,
    QSTASH_TOKEN,
} from '../config/env.js';

export const workflowClient = new WorkflowClient({
    baseurl: QSTASH_URL,
    token: QSTASH_TOKEN,
})