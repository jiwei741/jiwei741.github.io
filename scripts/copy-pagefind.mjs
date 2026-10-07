// 把 pagefind 生成的搜索索引从 dist 复制回 public，
// 这样下次 dev/build 时它仍然可用。
// 用 Node 而不是 `cp -r`，因为要在 Windows 和 CI(Linux) 上都能跑。
import { cpSync, existsSync } from "node:fs";

const SRC = "dist/pagefind";
const DEST = "public/pagefind";

if (!existsSync(SRC)) {
  console.error(`[copy-pagefind] 找不到 ${SRC}，pagefind 可能没有成功运行`);
  process.exit(1);
}

cpSync(SRC, DEST, { recursive: true });
console.log(`[copy-pagefind] ${SRC} -> ${DEST}`);
