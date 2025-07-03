import { NextRequest, NextResponse } from 'next/server';
import runMigrations from '@/lib/data/migrations';

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 Running database migrations...');
    
    const success = runMigrations();
    
    if (success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Database migrations completed successfully' 
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'Some migrations failed' 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('❌ Error running migrations:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to run migrations',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 