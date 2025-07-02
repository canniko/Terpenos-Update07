"use client"

import { Button } from "@/components/ui/button"

export default function TestColorsPage() {
  return (
    <div className="min-h-screen bg-brand-background p-8">
      <div className="container mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-brand-text">Color Test Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Background Colors */}
          <div className="card-premium">
            <h3 className="text-lg font-semibold mb-4">Background Colors</h3>
            <div className="space-y-3">
              <div className="h-12 bg-brand-background rounded-lg border border-brand-border flex items-center justify-center">
                <span className="text-brand-text">Brand Background</span>
              </div>
              <div className="h-12 bg-brand-alt rounded-lg border border-brand-border flex items-center justify-center">
                <span className="text-brand-text">Brand Alt</span>
              </div>
              <div className="h-12 bg-white rounded-lg border border-brand-border flex items-center justify-center">
                <span className="text-brand-text">White</span>
              </div>
            </div>
          </div>

          {/* Brand Colors */}
          <div className="card-premium">
            <h3 className="text-lg font-semibold mb-4">Brand Colors</h3>
            <div className="space-y-3">
              <div className="h-12 bg-brand-green rounded-lg flex items-center justify-center">
                <span className="text-white font-medium">Brand Green</span>
              </div>
              <div className="h-12 bg-brand-sage rounded-lg flex items-center justify-center">
                <span className="text-brand-text font-medium">Brand Sage</span>
              </div>
              <div className="h-12 bg-brand-teal rounded-lg flex items-center justify-center">
                <span className="text-brand-text font-medium">Brand Teal</span>
              </div>
              <div className="h-12 bg-brand-hover rounded-lg flex items-center justify-center">
                <span className="text-brand-text font-medium">Brand Hover</span>
              </div>
            </div>
          </div>

          {/* Text Colors */}
          <div className="card-premium">
            <h3 className="text-lg font-semibold mb-4">Text Colors</h3>
            <div className="space-y-3">
              <p className="text-brand-text font-medium">Brand Text</p>
              <p className="text-brand-muted">Brand Muted</p>
              <p className="text-brand-green font-medium">Brand Green Text</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="card-premium">
            <h3 className="text-lg font-semibold mb-4">Buttons</h3>
            <div className="space-y-3">
              <Button className="btn-primary w-full">Primary Button</Button>
              <Button className="btn-secondary w-full">Secondary Button</Button>
              <Button className="btn-outline w-full">Outline Button</Button>
            </div>
          </div>

          {/* Gradients */}
          <div className="card-premium">
            <h3 className="text-lg font-semibold mb-4">Gradients</h3>
            <div className="space-y-3">
              <div className="h-12 bg-gradient-premium rounded-lg flex items-center justify-center">
                <span className="text-brand-text font-medium">Premium Gradient</span>
              </div>
              <h2 className="text-gradient text-2xl font-bold">Text Gradient</h2>
            </div>
          </div>

          {/* Shadows */}
          <div className="card-premium">
            <h3 className="text-lg font-semibold mb-4">Shadows</h3>
            <div className="space-y-3">
              <div className="h-12 bg-white shadow-soft rounded-lg flex items-center justify-center">
                <span className="text-brand-text">Soft Shadow</span>
              </div>
              <div className="h-12 bg-white shadow-premium rounded-lg flex items-center justify-center">
                <span className="text-brand-text">Premium Shadow</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-brand-muted">
            If you can see this page with the correct colors, the design system is working!
          </p>
        </div>
      </div>
    </div>
  )
} 