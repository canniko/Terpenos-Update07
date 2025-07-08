"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export function AdminAccess() {
  return (
    <Link href="/admin/login">
      <Button 
        variant="outline" 
        size="icon" 
        className="w-9 px-0 border-terpenos-light-green hover:bg-terpenos-light-green/10"
        title="Admin Access"
      >
        <Shield className="h-4 w-4 text-terpenos-green dark:text-terpenos-light-green" />
        <span className="sr-only">Admin Access</span>
      </Button>
    </Link>
  )
} 