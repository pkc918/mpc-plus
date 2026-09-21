import Link from "next/link";
import { ArrowRight, ArrowUpRight, Boxes, Layers3, TerminalSquare } from "lucide-react";
import { AlipayIcon, DouyinIcon, WeChatIcon, XiaohongshuIcon } from "@/components/platform-icons";

const stages = ["配置发现", "配置加载", "环境解析", "参数解析", "平台分发", "上传成功"];

const platforms = [
  {
    name: "微信",
    key: "wechat",
    icon: WeChatIcon,
    accent: "bg-[#07C160]/12 text-[#07C160]",
    description: "使用 miniprogram-ci，按环境和私钥上传。",
    href: "/docs/wechat",
  },
  {
    name: "抖音",
    key: "douyin",
    icon: DouyinIcon,
    accent: "bg-fd-foreground/8 text-fd-foreground",
    description: "使用 tt-ide-cli，支持测试通道和 source map。",
    href: "/docs/configuration",
  },
  {
    name: "支付宝",
    key: "alipay",
    icon: AlipayIcon,
    accent: "bg-[#1677FF]/12 text-[#1677FF]",
    description: "使用 minidev 和身份密钥，可选设为体验版。",
    href: "/docs/alipay",
  },
  {
    name: "小红书",
    key: "xhs",
    icon: XiaohongshuIcon,
    accent: "bg-[#FF2442]/12 text-[#FF2442]",
    description: "使用 xhs-mp-cli 和代码上传 Token，适合 CI。",
    href: "/docs/xhs",
  },
];

const features = [
  {
    icon: Boxes,
    eyebrow: "Config",
    title: "一份配置覆盖全部目标",
    description:
      "在 mpc.config.ts 里声明项目、版本、平台和环境。本地和 CI 读取同一份文件，不再把凭据散落在脚本里。",
    href: "/docs/configuration",
  },
  {
    icon: Layers3,
    eyebrow: "Release",
    title: "批量分发",
    description: "不传筛选参数时，按配置依次上传全部平台和环境。某个目标失败也不会挡住后续任务。",
    href: "/docs/upload",
  },
  {
    icon: TerminalSquare,
    eyebrow: "Observe",
    title: "过程透明",
    description: "配置发现、环境解析、平台分发和上传结果都会实时打在终端，方便定位 CI 失败。",
    href: "/docs/troubleshooting",
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-full bg-[radial-gradient(1200px_circle_at_20%_-10%,color-mix(in_srgb,var(--color-fd-primary)_16%,transparent),transparent_44%)]">
      <section className="px-6 pb-20 pt-16 sm:pb-24 sm:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <p className="text-xs font-medium tracking-[0.28em] text-fd-muted-foreground uppercase">
              Mini Program CI
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.055em] text-balance sm:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
              一次配置，发布所有小程序环境
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-fd-muted-foreground sm:text-lg">
              MPC Plus 把配置发现、环境合并、平台分发和上传结果串成一条 CLI
              流程。本地调试和 CI 使用相同命令，每一步都能在终端看到。
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/docs/installation"
                className="inline-flex items-center gap-2 rounded-full bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
              >
                快速开始
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/docs/configuration"
                className="inline-flex items-center gap-2 rounded-full border border-fd-foreground/10 bg-fd-background/55 px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-fd-accent"
              >
                查看配置
              </Link>
            </div>
          </div>

          <div className="mpc-code-glow overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0c1017]/92 shadow-2xl shadow-black/20 backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-white/8 px-5 py-4">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-[11px] tracking-wide text-white/40">
                mpc upload
              </span>
            </div>
            <div className="space-y-2.5 overflow-x-auto p-5 font-mono text-[13px] leading-7 text-white/70 sm:p-7">
              <p>
                <span className="text-emerald-400">$</span> pnpm exec mpc upload
              </p>
              {stages.map((stage, index) => (
                <p key={stage} className={index === 0 ? "pt-2" : undefined}>
                  <span className="text-sky-400">[mpc]</span>{" "}
                  <span className="text-emerald-400">✔</span> {stage}
                  {stage === "上传成功" ? " · wechat/dev" : ""}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.22em] text-fd-muted-foreground uppercase">
                Platforms
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">当前已支持的平台</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-fd-muted-foreground">
              一份配置里声明多个平台和环境，上传时用 <code>--platform</code> 和{" "}
              <code>--env</code> 筛选。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map(({ name, key, icon: Icon, accent, description, href }) => (
              <Link
                key={key}
                href={href}
                className="group rounded-[1.5rem] border border-fd-foreground/8 bg-fd-background/50 p-5 backdrop-blur-sm transition-colors hover:border-fd-foreground/16 hover:bg-fd-background/70 sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className={`flex size-11 items-center justify-center rounded-2xl ${accent}`}>
                    <Icon className="size-5" />
                  </div>
                  <ArrowUpRight className="size-4 text-fd-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{name}</h3>
                <p className="mt-1 font-mono text-xs text-fd-muted-foreground">{key}</p>
                <p className="mt-3 text-sm leading-6 text-fd-muted-foreground">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.22em] text-fd-muted-foreground uppercase">
                Workflow
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">从配置到结果，保持简单</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-fd-muted-foreground">
              面向真实发布流程设计：一份配置、多次分发、全程可观察。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, eyebrow, title, description, href }) => (
              <Link
                key={title}
                href={href}
                className="group rounded-[1.5rem] border border-fd-foreground/8 bg-fd-background/50 p-6 backdrop-blur-sm transition-colors hover:border-fd-foreground/16 hover:bg-fd-background/70 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-fd-primary/10 text-fd-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <ArrowUpRight className="size-4 text-fd-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-8 text-xs tracking-[0.2em] text-fd-muted-foreground uppercase">
                  {eyebrow}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 max-w-md leading-7 text-fd-muted-foreground">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[1.75rem] border border-fd-foreground/8 bg-fd-background/45 px-6 py-8 backdrop-blur-sm sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-[0.22em] text-fd-muted-foreground uppercase">
              Get started
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">本地和 CI，执行同一条命令</h2>
            <p className="mt-3 max-w-md leading-7 text-fd-muted-foreground">
              不必再为流水线单独写上传脚本。安装 CLI 后，本地调试和 CI 都走{" "}
              <code>mpc upload</code>。
            </p>
          </div>

          <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center">
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0c1017] px-5 py-4 font-mono text-[13px] leading-7 text-white/75">
              <p>
                <span className="text-emerald-400">$</span> pnpm add -D @mpc-plus/cli
              </p>
              <p>
                <span className="text-emerald-400">$</span> pnpm exec mpc upload
              </p>
            </div>
            <Link
              href="/docs/installation"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
            >
              开始安装
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
