import { Suspense } from "react"
 
import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/components/github-contributions"
import { getCachedContributions } from "@/components/github-contributions/lib/get-cached-contributions"
 
const GITHUB_USERNAME = "bruno-rodrigues0"
const GITHUB_PROFILE_URL = "https://github.com/bruno-rodrigues0"

export default function GithubContrib(){
  const contributions = getCachedContributions(GITHUB_USERNAME)

  return (
    <div className="w-full border-x border-line p-4">
    <Suspense fallback={<GitHubContributionsFallback />}>
        <GitHubContributions
          contributions={contributions}
          githubProfileUrl={GITHUB_PROFILE_URL}
        />
      </Suspense>
    </div>
  )
}
