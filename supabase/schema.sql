-- KlarKreis Supabase Schema
-- Einspielen via Dashboard → SQL Editor → Run
--
-- Versionen:
--   v1 · 2026-04-20 · Initial: profiles, seen_questions, question_favorites, completed_abende

-- ---------------------------------------------------------------
-- PROFILES (1:1 Ergänzung zu auth.users)
-- ---------------------------------------------------------------
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  display_name text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

drop policy if exists "Own profile read" on public.profiles;
create policy "Own profile read" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "Own profile insert" on public.profiles;
create policy "Own profile insert" on public.profiles
  for insert with check (auth.uid() = id);

drop policy if exists "Own profile update" on public.profiles;
create policy "Own profile update" on public.profiles
  for update using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id) values (new.id)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ---------------------------------------------------------------
-- SEEN QUESTIONS (Fragerunde: welche Fragen hat der User schon gesehen)
-- ---------------------------------------------------------------
create table if not exists public.seen_questions (
  user_id uuid references auth.users(id) on delete cascade,
  question_text text not null,
  category text,
  seen_at timestamptz default now(),
  primary key (user_id, question_text)
);

alter table public.seen_questions enable row level security;

drop policy if exists "Own seen select" on public.seen_questions;
create policy "Own seen select" on public.seen_questions
  for select using (auth.uid() = user_id);

drop policy if exists "Own seen insert" on public.seen_questions;
create policy "Own seen insert" on public.seen_questions
  for insert with check (auth.uid() = user_id);

drop policy if exists "Own seen update" on public.seen_questions;
create policy "Own seen update" on public.seen_questions
  for update using (auth.uid() = user_id);

drop policy if exists "Own seen delete" on public.seen_questions;
create policy "Own seen delete" on public.seen_questions
  for delete using (auth.uid() = user_id);

create index if not exists idx_seen_questions_user on public.seen_questions (user_id);

-- ---------------------------------------------------------------
-- QUESTION FAVORITES (merkbare Lieblings-Fragen)
-- ---------------------------------------------------------------
create table if not exists public.question_favorites (
  user_id uuid references auth.users(id) on delete cascade,
  question_text text not null,
  category text,
  created_at timestamptz default now(),
  primary key (user_id, question_text)
);

alter table public.question_favorites enable row level security;

drop policy if exists "Own fav select" on public.question_favorites;
create policy "Own fav select" on public.question_favorites
  for select using (auth.uid() = user_id);

drop policy if exists "Own fav insert" on public.question_favorites;
create policy "Own fav insert" on public.question_favorites
  for insert with check (auth.uid() = user_id);

drop policy if exists "Own fav delete" on public.question_favorites;
create policy "Own fav delete" on public.question_favorites
  for delete using (auth.uid() = user_id);

create index if not exists idx_question_favorites_user on public.question_favorites (user_id);

-- ---------------------------------------------------------------
-- COMPLETED ABENDE (welche Themenabende hat der User schon gemacht)
-- ---------------------------------------------------------------
create table if not exists public.completed_abende (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  theme_id text not null,
  theme_title text,
  completed_at timestamptz default now(),
  participants_count int,
  notes text
);

alter table public.completed_abende enable row level security;

drop policy if exists "Own abende select" on public.completed_abende;
create policy "Own abende select" on public.completed_abende
  for select using (auth.uid() = user_id);

drop policy if exists "Own abende insert" on public.completed_abende;
create policy "Own abende insert" on public.completed_abende
  for insert with check (auth.uid() = user_id);

drop policy if exists "Own abende update" on public.completed_abende;
create policy "Own abende update" on public.completed_abende
  for update using (auth.uid() = user_id);

drop policy if exists "Own abende delete" on public.completed_abende;
create policy "Own abende delete" on public.completed_abende
  for delete using (auth.uid() = user_id);

create index if not exists idx_completed_abende_user_date
  on public.completed_abende (user_id, completed_at desc);
