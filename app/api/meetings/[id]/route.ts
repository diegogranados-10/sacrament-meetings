import { NextResponse, type NextRequest } from 'next/server';
import { getMeetingById } from '@/lib/meetings-db';
import type { ApiError, SacramentMeeting } from '@/lib/types';

export async function GET(
  _request: NextRequest,
  { params }: RouteContext<'/api/meetings/[id]'>,
): Promise<NextResponse<SacramentMeeting | ApiError>> {
  const { id } = await params;

  if (!/^\d+$/.test(id)) {
    return NextResponse.json<ApiError>(
      { error: `"${id}" is not a valid meeting id. Ids are positive whole numbers.` },
      { status: 400 },
    );
  }

  const meeting = getMeetingById(Number(id));
  if (!meeting) {
    return NextResponse.json<ApiError>(
      { error: `No meeting found with id ${id}.` },
      { status: 404 },
    );
  }

  return NextResponse.json<SacramentMeeting>(meeting);
}
