import { authMiddleware } from "@clerk/nextjs";

// 아래 예시에서는 /api/uploadthing 경로를 publicRoutes 배열에 추가하여
// 이 경로를 공개적으로 접근 가능하게 만듭니다.
export default authMiddleware({
  publicRoutes: ["/api/uploadthing"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
