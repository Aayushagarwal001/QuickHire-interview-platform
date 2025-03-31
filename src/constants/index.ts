import { Clock, Code2, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
];

export const QUICK_ACTIONS = [
  {
    icon: Code2,
    title: "New Call",
    description: "Start an instant call",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Plan upcoming interviews",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "reverse-nodes-k-group",
    title: "Reverse Nodes in k-Group",
    description:
      "Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.\n\nk is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.\n\nYou may not alter the values in the list's nodes, only nodes themselves may be changed.",
    examples: [
      { input: "head = [1,2,3,4,5], k = 2", output: "[2,1,4,3,5]" },
      { input: "head = [1,2,3,4,5], k = 3", output: "[3,2,1,4,5]" },
    ],
    starterCode: {
      javascript: `function reverseKGroup(head, k) { }`,
      python: `def reverse_k_group(head, k): pass`,
      java: `class Solution { public ListNode reverseKGroup(ListNode head, int k) { } }`,
      c: `struct ListNode* reverseKGroup(struct ListNode* head, int k) { }`,
      cpp: `ListNode* reverseKGroup(ListNode* head, int k) { }`,
      typescript: `function reverseKGroup(head: ListNode, k: number): ListNode { }`,
      csharp: `public ListNode ReverseKGroup(ListNode head, int k) { }`,
      ruby: `def reverse_k_group(head, k) end`,
    },
    constraints: [
      "The number of nodes in the list is n.",
      "1 ≤ k ≤ n ≤ 5000",
      "0 ≤ Node.val ≤ 1000"
    ],
  },
  {
    id: "two-sum",
    title: "Two Sum",
    description:
      "Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to `target`.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) { }`,
      python: `def two_sum(nums, target): pass`,
      java: `class Solution { public int[] twoSum(int[] nums, int target) { } }`,
      c: `int* twoSum(int* nums, int numsSize, int target, int* returnSize) { }`,
      cpp: `vector<int> twoSum(vector<int>& nums, int target) { }`,
      typescript: `function twoSum(nums: number[], target: number): number[] { }`,
      csharp: `public int[] TwoSum(int[] nums, int target) { }`,
      ruby: `def two_sum(nums, target) end`,
    },
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists."
    ],
  },
  {
    id: "reverse-string",
    title: "Reverse String",
    description:
      "Write a function that reverses a string. The input string is given as an array of characters `s`.\nYou must do this by modifying the input array in-place with O(1) extra memory.",
    examples: [
      { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
      { input: 's = ["H","a","n","n","a","h"]', output: '["h","a","n","n","a","H"]' },
    ],
    starterCode: {
      javascript: `function reverseString(s) { }`,
      python: `def reverse_string(s): pass`,
      java: `class Solution { public void reverseString(char[] s) { } }`,
      c: `void reverseString(char* s, int sSize) { }`,
      cpp: `void reverseString(vector<char>& s) { }`,
      typescript: `function reverseString(s: string[]): void { }`,
      csharp: `public void ReverseString(char[] s) { }`,
      ruby: `def reverse_string(s) end`,
    },
  },
  {
    id: "palindrome-number",
    title: "Palindrome Number",
    description:
      "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.\nAn integer is a palindrome when it reads the same forward and backward.",
    examples: [
      { input: "x = 121", output: "true", explanation: "121 reads as 121 from left to right and from right to left." },
      { input: "x = -121", output: "false", explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome." },
    ],
    starterCode: {
      javascript: `function isPalindrome(x) { }`,
      python: `def is_palindrome(x): pass`,
      java: `class Solution { public boolean isPalindrome(int x) { } }`,
      c: `bool isPalindrome(int x) { }`,
      cpp: `bool isPalindrome(int x) { }`,
      typescript: `function isPalindrome(x: number): boolean { }`,
      csharp: `public bool IsPalindrome(int x) { }`,
      ruby: `def is_palindrome(x) end`,
    },
  },

];
export const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
  { id: "c", name: "C", icon: "/c.png" },
  { id: "cpp", name: "C++", icon: "/cpp.png" },
  { id: "typescript", name: "TypeScript", icon: "/typescript.png" },
  { id: "csharp", name: "C#", icon: "/csharp.png" },
  { id: "ruby", name: "Ruby", icon: "/ruby.png" }
] as const;


export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    javascript: string;
    python: string;
    java: string;
    c : string;
    cpp: string;
    typescript: string;
    csharp: string;
    ruby: string;
  };
  constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];