import { Injectable } from '@angular/core';
import { RetryContext } from "@microsoft/signalr";

@Injectable({
  providedIn: 'root'
})
export class CustomRetryPolicyService implements signalR.IRetryPolicy {

  constructor() { }

  maxRetryAttempts = 0;

    nextRetryDelayInMilliseconds(retryContext: RetryContext): number {
        console.info(`Retry :: ${retryContext.retryReason}`);
        if (retryContext.previousRetryCount === 10) return null as any; //null stop!

        var nextRetry = retryContext.previousRetryCount * 1000 || 1000;
        console.log(`Retry in ${nextRetry} milliseconds`);
        return nextRetry;
    }
}
