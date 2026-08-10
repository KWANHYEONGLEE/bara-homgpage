"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { companyInfo } from "@/lib/site";

/**
 * 이 폼은 서버로 전송하지 않고 사용자의 메일 앱을 연다.
 * 그래서 버튼과 안내 문구도 "보낸다"가 아니라 "메일 앱이 열린다"로 쓴다.
 * 서버 수신이 생기면 handleSubmit 과 문구를 함께 바꾼다.
 */
export function ContactForm() {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = `${message}\n\n---\n회신 주소: ${email}`;
    const href = `mailto:${companyInfo.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="contact-subject" className="font-medium">
          제목
        </Label>
        <Input
          id="contact-subject"
          name="subject"
          placeholder="문의 제목을 적어주세요"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-email" className="font-medium">
          회신받을 이메일
        </Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          placeholder="name@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message" className="font-medium">
          내용
        </Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="어떤 내용이든 편하게 적어주세요."
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-44 resize-y"
        />
      </div>

      <div className="pt-1">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          메일 앱으로 작성하기
        </Button>
        <p className="t-caption mt-3">
          누르면 입력한 내용이 담긴 채로 메일 앱이 열립니다. 마지막 전송은
          메일 앱에서 직접 해주세요.
        </p>
      </div>
    </form>
  );
}
