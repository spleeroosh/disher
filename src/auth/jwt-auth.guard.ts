// import { AuthGuard } from '@nestjs/passport';
// import { GqlExecutionContext } from '@nestjs/graphql';
// import { AuthenticationError } from 'apollo-server-express';
// import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
// import { ExecutionContext, Injectable } from '@nestjs/common';

// @Injectable()
// export class JwtAuthGuard extends AuthGuard('jwt') {
//   canActivate(context: ExecutionContext) {
//     const ctx = GqlExecutionContext.create(context);
//     const { req } = ctx.getContext();

//     return super.canActivate(new ExecutionContextHost([req]));
//   }

//   handleRequest(err: any, user: any) {
//     if (err || !user) {
//       throw err || new AuthenticationError('GqlAuthGuard');
//     }
//     return user;
//   }
// }
