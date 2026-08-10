"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { companyInfo } from "@/lib/site";

/**
 * 백엔드가 아직 없으므로 제출 시 메일 클라이언트를 여는 방식으로 동작한다.
 * 서버 수신이 필요해지면 이 핸들러만 API 호출로 교체하면 된다.
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
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border p-6 sm:p-10"
    >
      <h2 className="text-xl font-bold sm:text-2xl">Contact us</h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-subject" className="sr-only">
            제목
          </Label>
          <Input
            id="contact-subject"
            name="subject"
            placeholder="제목"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email" className="sr-only">
            이메일 주소
          </Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            placeholder="이메일 주소"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <Label htmlFor="contact-message" className="sr-only">
          메시지
        </Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="메시지"
          required
          rows={7}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-y"
        />
      </div>

      <Button type="submit" variant="outline" className="mt-6 rounded-full">
        메시지 보내기
        <ArrowRight className="size-4" />
      </Button>
    </form>
  );
}
