import { NextResponse, type NextRequest } from 'next/server';
import { isISODate } from '@/lib/dates';
import { getMeetings } from '@/lib/meetings-db';
import type { ApiError, SacramentMeeting } from '@/lib/types';

export async function GET(
  request: NextRequest,
): Promise<NextResponse<SacramentMeeting[] | ApiError>> {
  const date = request.nextUrl.searchParams.get('date');

  if (date !== null && !isISODate(date)) {
    return NextResponse.json<ApiError>(
      { error: 'The date parameter must be a valid date in YYYY-MM-DD format.' },
      { status: 400 },
    );
  }

  return NextResponse.json<SacramentMeeting[]>(getMeetings(date));
}
