-- CreateTable
CREATE TABLE "levels" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image_file_name" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL DEFAULT 'Easy',

    CONSTRAINT "levels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "search_objects" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon_file_name" TEXT NOT NULL,
    "target_x" DOUBLE PRECISION NOT NULL,
    "target_y" DOUBLE PRECISION NOT NULL,
    "radius" DOUBLE PRECISION NOT NULL DEFAULT 3.0,
    "level_id" TEXT NOT NULL,

    CONSTRAINT "search_objects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player_sessions" (
    "id" TEXT NOT NULL,
    "player_name" TEXT,
    "start_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_time" TIMESTAMP(3),
    "final_time_seconds" INTEGER,
    "level_id" TEXT NOT NULL,

    CONSTRAINT "player_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "player_sessions_level_id_final_time_seconds_idx" ON "player_sessions"("level_id", "final_time_seconds");

-- AddForeignKey
ALTER TABLE "search_objects" ADD CONSTRAINT "search_objects_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_sessions" ADD CONSTRAINT "player_sessions_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
