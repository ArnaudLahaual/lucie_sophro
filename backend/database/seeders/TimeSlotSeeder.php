<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use App\Models\TimeSlot;

class TimeSlotSeeder extends Seeder
{
    public function run(): void
    {
        $startDate = Carbon::today();
        $endDate = Carbon::today()->addDays(90);
        $slots = ["09:00", "10:30", "14:00", "15:30", "17:00"];

        for ($date = $startDate->copy(); $date->lte($endDate); $date->addDay()) {

            if ($date->isWeekend()) {
                continue;
            }

            foreach ($slots as $slot) {
                TimeSlot::create([
                    'date' => $date->format('Y-m-d'),
                    'time' => $slot,
                ]);
            }
        }
    }
}
